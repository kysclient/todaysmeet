
export const config = {
    runtime: 'edge',
    unstable_allowDynamic: [
        '/node_modules/function-bind/**',
    ]
};

const handler = async (request: Request): Promise<Response> => {

    return new Response({test: 'success'}, {status: 200})

}

export default handler
