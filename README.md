## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Command 
```
npx prisma migrate dev --name init
```


# 3 way to get session 

1. client 
   ```js
    import { useSession } from 'next-auth/react'
    ```
2. midleware 
    ```js
        import { getToken } from 'next-auth/jwt'
        import { NextResponse } from 'next/server'

        export async function middleware(request) {
        const user = await getToken({
            req: request,
            secret: process.env.NEXTAUTH_SECRET,
        })

        // logic
        }
    ```
3. server (api)
    ```js
        import { getServerSession } from 'next-auth/next'
        import { authOptions } from '../auth/[...nextauth]/route'

        export async function GET(request) {
        const session = await getServerSession(authOptions)

        console.log('session', session)

        return Response.json({
            message: 'test',
        })
        }
    ```

# for google auth
-https://next-auth.js.org/providers/google 


# bug list 