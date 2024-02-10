import {API_KEY} from "./config";
import {Chroma} from '@langchain/community/vectorstores/chroma';
import {OpenAIEmbeddings} from '@langchain/openai';

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

    console.log(await vectorStore.index.listCollections());

})();