
export const config = {
    runtime: 'edge'
};

const handler = async (request: Request): Promise<Response> => {

    return new Response({test: 'success'}, {status: 200})

}

export default handler
