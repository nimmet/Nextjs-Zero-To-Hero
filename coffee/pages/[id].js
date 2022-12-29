import Head from "next/head"
import { useRouter } from "next/router"

const DynamicPage = ()=> {
    const router = useRouter()
    return (
        <div>
        <Head>
            <title>{router.query.id}</title>
        </Head>
        </div>    
        )
}

export default DynamicPage