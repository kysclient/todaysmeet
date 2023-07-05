import {OpenAIStream} from "@lib/server";
import {OpenAIModelID} from "@lib/types/openai";

export const config = {
    runtime: 'edge'
};

const handler = async (request: Request): Promise<Response> => {

    const data = await OpenAIStream(
        {
            id: OpenAIModelID.GPT_3_5,
            name: 'GPT-3.5',
            maxLength: 12000,
            tokenLimit: 4000,
        }, "hi", 1, "", []
    )

    return new Response(data)

}

export default handler
