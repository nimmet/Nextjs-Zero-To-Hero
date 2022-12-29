import Head from "next/head"
import { useRouter } from "next/router"

const DynamicPage = ()=> {
    const router = useRouter()
    return (
        <div>
        <Head>
            <title>{router.query.id}</title>
        </Head>
        <h1>Hi This is a dynamic route.</h1>
        </div>    
        )
}

export default DynamicPage