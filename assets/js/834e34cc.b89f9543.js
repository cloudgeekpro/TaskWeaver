"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4471],{1550:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>x,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var d=r(5893),s=r(1151);const i={},o="Configuration File",c={id:"configurations/overview",title:"Configuration File",description:"An overview of all configurations available in the config file, which is located at project/taskweaver_config.json.",source:"@site/docs/configurations/overview.md",sourceDirName:"configurations",slug:"/configurations/overview",permalink:"/TaskWeaver/docs/configurations/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/TaskWeaver/tree/main/website/docs/configurations/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"documentSidebar",previous:{title:"Configurations",permalink:"/TaskWeaver/docs/advanced"},next:{title:"More about Configurations",permalink:"/TaskWeaver/docs/configurations/configurations_in_detail"}},t={},l=[];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"configuration-file",children:"Configuration File"}),"\n",(0,d.jsxs)(n.p,{children:["An overview of all configurations available in the config file, which is located at ",(0,d.jsx)(n.code,{children:"project/taskweaver_config.json"}),".\nYou can edit this file to configure TaskWeaver.\nThe configuration file is in JSON format. So for boolean values, use ",(0,d.jsx)(n.code,{children:"true"})," or ",(0,d.jsx)(n.code,{children:"false"})," instead of ",(0,d.jsx)(n.code,{children:"True"})," or ",(0,d.jsx)(n.code,{children:"False"}),".\nFor null values, use ",(0,d.jsx)(n.code,{children:"null"})," instead of ",(0,d.jsx)(n.code,{children:"None"})," or ",(0,d.jsx)(n.code,{children:'"null"'}),". All other values should be strings in double quotes.\nThe following table lists the parameters in the configuration file:"]}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Default Value"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.model"})}),(0,d.jsx)(n.td,{children:"The model name used by the language model."}),(0,d.jsx)(n.td,{children:"gpt-4"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.backup_model"})}),(0,d.jsx)(n.td,{children:"The model name used for self-correction purposes."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.api_base"})}),(0,d.jsx)(n.td,{children:"The base URL of the OpenAI API."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"https://api.openai.com/v1"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.api_key"})}),(0,d.jsx)(n.td,{children:"The API key of the OpenAI API."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"null"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.api_type"})}),(0,d.jsxs)(n.td,{children:["The type of the OpenAI API, could be ",(0,d.jsx)(n.code,{children:"openai"})," or ",(0,d.jsx)(n.code,{children:"azure"}),"."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"openai"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.api_version"})}),(0,d.jsx)(n.td,{children:"The version of the OpenAI API."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"2023-07-01-preview"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.response_format"})}),(0,d.jsxs)(n.td,{children:["The response format of the OpenAI API, could be ",(0,d.jsx)(n.code,{children:"json_object"}),", ",(0,d.jsx)(n.code,{children:"text"})," or ",(0,d.jsx)(n.code,{children:"null"}),"."]}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"json_object"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.embedding_api_type"})}),(0,d.jsx)(n.td,{children:"The type of the embedding API"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"sentence_transformers"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"llm.embedding_model"})}),(0,d.jsx)(n.td,{children:"The name of the embedding model"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"all-mpnet-base-v2"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"ext_llms.llm_configs"})}),(0,d.jsx)(n.td,{children:"The extra LLM configs for different components."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"{}"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_interpreter.code_verification_on"})}),(0,d.jsx)(n.td,{children:"Whether to enable code verification."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_interpreter.allowed_modules"})}),(0,d.jsx)(n.td,{children:"The list of allowed modules to import in code generation."}),(0,d.jsxs)(n.td,{children:[(0,d.jsx)(n.code,{children:'["pandas", "matplotlib", "numpy", "sklearn", "scipy", "seaborn", "datetime", "typing"]'}),", if the list is empty, no modules would be allowed"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_interpreter.blocked_functions"})}),(0,d.jsx)(n.td,{children:"The list of functions to block from code generation."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:'["__import__", "eval", "exec", "execfile", "compile", "open", "input", "raw_input", "reload"]'})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"logging.log_file"})}),(0,d.jsx)(n.td,{children:"The name of the log file."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"taskweaver.log"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"logging.log_folder"})}),(0,d.jsx)(n.td,{children:"The folder to store the log file."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"logs"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"plugin.base_path"})}),(0,d.jsx)(n.td,{children:"The folder to store plugins."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"${AppBaseDir}/plugins"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"planner.example_base_path"})}),(0,d.jsx)(n.td,{children:"The folder to store planner examples."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"${AppBaseDir}/planner_examples"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"planner.prompt_compression"})}),(0,d.jsx)(n.td,{children:"Whether to compress the chat history for planner."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"planner.skip_planning"})}),(0,d.jsx)(n.td,{children:"Whether to skip LLM planning process and enable the default plan"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"planner.use_experience"})}),(0,d.jsx)(n.td,{children:"Whether to use experience summarized from the previous chat history in planner."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_generator.example_base_path"})}),(0,d.jsx)(n.td,{children:"The folder to store code interpreter examples."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"${AppBaseDir}/codeinterpreter_examples"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_generator.prompt_compression"})}),(0,d.jsx)(n.td,{children:"Whether to compress the chat history for code interpreter."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_generator.enable_auto_plugin_selection"})}),(0,d.jsx)(n.td,{children:"Whether to enable auto plugin selection."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_generator.use_experience"})}),(0,d.jsx)(n.td,{children:"Whether to use experience summarized from the previous chat history in code generator."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"code_generator.auto_plugin_selection_topk"})}),(0,d.jsx)(n.td,{children:"The number of auto selected plugins in each round."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"3"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"session.max_internal_chat_round_num"})}),(0,d.jsx)(n.td,{children:"The maximum number of internal chat rounds between Planner and Code Interpreter."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"10"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"session.code_interpreter_only"})}),(0,d.jsx)(n.td,{children:"Allow users to directly communicate with the Code Interpreter."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"session.plugin_only_mode"})}),(0,d.jsx)(n.td,{children:"Whether to enable the plugin-only mode."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"false"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"round_compressor.rounds_to_compress"})}),(0,d.jsx)(n.td,{children:"The number of rounds to compress."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"2"})})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"round_compressor.rounds_to_retain"})}),(0,d.jsx)(n.td,{children:"The number of rounds to retain."}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"3"})})]})]})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\ud83d\udca1 ${AppBaseDir} is the project directory."}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["\ud83d\udca1 Up to 11/30/2023, the ",(0,d.jsx)(n.code,{children:"json_object"})," and ",(0,d.jsx)(n.code,{children:"text"})," options of ",(0,d.jsx)(n.code,{children:"llm.response_format"})," is only supported by the OpenAI models later than 1106. If you are using an older version of OpenAI model, you need to set the ",(0,d.jsx)(n.code,{children:"llm.response_format"})," to ",(0,d.jsx)(n.code,{children:"null"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["\ud83d\udca1 Read ",(0,d.jsx)(n.a,{href:"/TaskWeaver/docs/advanced/compression",children:"this"})," for more information for ",(0,d.jsx)(n.code,{children:"planner.prompt_compression"})," and ",(0,d.jsx)(n.code,{children:"code_generator.prompt_compression"}),"."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var d=r(7294);const s={},i=d.createContext(s);function o(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);