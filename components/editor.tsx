"use client";

import { useState } from 'react';
import 'katex/dist/katex.css';
import katex from 'katex';
import { getCodeString } from 'rehype-rewrite';
import MDEditor from "@uiw/react-md-editor";


// @ts-ignore
const transformLatex = ({ inline, children = [], className, ...props }) => {

  const txt = children[0] || '';
  if (inline) {
    if (typeof txt === 'string' && /^\$\$(.*)\$\$/.test(txt)) {
      // @ts-ignore
      const html = katex.renderToString(txt.replace(/^\$\$(.*)\$\$/, '$1'), {
        throwOnError: false,
      });

      return <code dangerouslySetInnerHTML={{ __html: html }} />;
    }

    return <code>{txt}</code>;
  }

  const code = props.node && props.node.children ? getCodeString(props.node.children) : txt;

  if (
    typeof code === 'string' &&
    typeof className === 'string' &&
    /^language-katex/.test(className.toLocaleLowerCase())
  ) {
    const html = katex.renderToString(code, {
      throwOnError: false,
    });

    return <code style={{ fontSize: '150%' }} dangerouslySetInnerHTML={{ __html: html }} />;
  }

  return children;
}

export const Editor = () => {
  const [value, setValue] = useState("");

  return (
    <div className="container p-0">
      {/* <div className='md:hidden'>
        <MDEditor
          value={value}
          // @ts-ignore
          onChange={setValue}
          textareaProps={{
            placeholder: 'Enter markdown text',
            name: "description",
            id: "description"
          }}
          preview='live'
          height={200}
          previewOptions={{
            components: {
              // @ts-ignore
              code: transformLatex,
            }
          }}
        />
      </div> */}
      <div>
        <MDEditor
          value={value}
          // @ts-ignore
          onChange={setValue}
          textareaProps={{
            placeholder: 'Enter markdown text',
            name: "description",
            id: "description"
          }}
          preview='live'
          height={350}
          previewOptions={{
            components: {
              // @ts-ignore
              code: transformLatex,
            }
          }}
        />
      </div>
    </div>
  );
};
