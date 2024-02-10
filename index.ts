import {API_KEY} from "./config";
import {Chroma} from '@langchain/community/vectorstores/chroma';
import {OpenAIEmbeddings} from '@langchain/openai';
import {PDFLoader} from "langchain/document_loaders/fs/pdf";

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

    const loader = new PDFLoader('./data/MegaK etap 2 Node js.pdf', {
        parsedItemSeparator: ' ',
    });

    const docs = await loader.loadAndSplit();

    const res = await vectorStore.addDocuments(docs);

    console.log(res);

})();