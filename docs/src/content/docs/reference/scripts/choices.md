---
title: Choices
description: Specify a list of preferred token choices for a script.
keywords: choices, preferred words, logit bias
sidebar:
    order: 20
---

You can specify a list of preferred words (choices) in the script metadata. It will increase the probability of the model generating the specified words.

-   Each word should match a single token for the desired model!
-   For some models, GenAIScript does not have a token encoder so it won't be able to compute the logit bias for the choices

```js
script({
    choices: ["OK", "ERR"],
})
...
```

```text
ERR
```

## Logit Bias

Internally, GenAIScript tokenizes the word and build the [logit_bias](https://help.openai.com/en/articles/5247780-using-logit-bias-to-alter-token-probability-with-the-openai-api) for each token.

-   choices: `OK`, `ERR`
-   logit bias: `{"5175":5,"5392":5}`

## Logprobs

You can enable [logprobs](/genaiscript/reference/scripts/logprobs) to visualize the confidence of the tokens generated by the model.

---

<span class="logprobs" title="100% (-0.000003)" style="background: rgb(0, 0, 180); color: white; white-space: pre; font-family: monospace;">ERR</span>
<span class="logprobs" title="32.07% (-1.14)" style="background: rgb(122, 0, 58); color: white; white-space: pre; font-family: monospace;">.</span>

---