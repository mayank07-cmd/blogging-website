import { Hono } from 'hono'
import { sign } from 'hono/jwt'
import { signupInput, signinInput} from "@mayankbisht/medium-common"
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const userRouter = new Hono<{
     Bindings: {
       DATABASE_URL: string
       JWT_SECRET  : string
     }
}>();

userRouter.post('/signup', async (c) => {
  const body = await c.req.json();
  const parsed = signupInput.safeParse(body)

  if (!parsed.success) {
    c.status(400)
    return c.json({ message: "Inputs not correct", error: parsed.error.format() })
  }
    const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  const user = await prisma.user.create({
    data: {
      email   : body.email,
      password: body.password,
    }
  })
  const token = await sign({ id: user.id }, c.env.JWT_SECRET);

    return c.json({ jwt: token })
})

userRouter.post('/signin', async (c) => {
  const body = await c.req.json();
  const { success } = signinInput.safeParse(body);
  if(!success) {
    c.status(411);
    return c.json({
      message: "Inputs not correct"
    })
  }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
	const user = await prisma.user.findUnique({
		where: { email: body.email }
	});
  
  if (!user || user.password !== body.password) {
  c.status(403);
  return c.json({ error: "Invalid email or password" });
}
	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({ jwt });
})