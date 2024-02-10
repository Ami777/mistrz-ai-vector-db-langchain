import {sayHelloPrompt} from "./prompts/say-hello.prompt";
import {helloExamplesPrompt} from "./prompts/examples/hello.examples.prompt";

(async () => {

    const text = await helloExamplesPrompt.format({
        name: 'Jakub',
    });

    console.log(text);

})();