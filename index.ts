import {API_KEY} from "./config";
import {Chroma} from '@langchain/community/vectorstores/chroma';
import {OpenAIEmbeddings, OpenAI} from '@langchain/openai';
import {RetrievalQAChain} from "langchain/chains";

(async () => {

    const vectorStore = await Chroma.fromExistingCollection(
        new OpenAIEmbeddings({
            openAIApiKey: API_KEY,
        }),
        {
            collectionName: 'mistrz-ai-test',
            url: ' http://localhost:8000',
        },
    );

    const model = new OpenAI({
        openAIApiKey: API_KEY,
        modelName: 'gpt-4-turbo-preview',
    });

    const chain = RetrievalQAChain.fromLLM(
        model,
        vectorStore.asRetriever(),
        {
            verbose: true,
        },
    );

    const res = await chain.invoke({
        query: 'W jaki sposób tworzyć procesy-dzieci?',
    });

    console.log(res.text);

})();