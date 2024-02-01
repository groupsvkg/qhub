"use client";

import { useState } from 'react';
import 'katex/dist/katex.css';
import katex from 'katex';
import { getCodeString } from 'rehype-rewrite';
import MDEditor from "@uiw/react-md-editor";

const transformLatex = ({ inline, children = [], className, ...props }) => {
    const txt = children[0] || '';
    if (inline) {
      if (typeof txt === 'string' && /^\$\$(.*)\$\$/.test(txt)) {
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
    return <code className={String(className)}>{txt}</code>;
  }

export const Editor = () => {
    const [value, setValue] = useState("");
    
    return (
        <div className="container">
            <div className='md:hidden'>
                <MDEditor
                    id="description"
                    value={value}
                    onChange={setValue}
                    textareaProps={{
                        placeholder: 'Enter markdown text',
                        name: "description"
                    }}
                    preview='live'
                    previewOptions={{
                        components: {
                          code: transformLatex,
                        }
                    }}
                />
            </div>
            <div className='hidden md:block'>
                <MDEditor
                    id="description"
                    value={value}
                    onChange={setValue}
                    textareaProps={{
                        placeholder: 'Enter markdown text',
                        name: "description"
                    }}
                    preview='live'
                    height={400}
                    previewOptions={{
                        components: {
                          code: transformLatex,
                        },
                      }}
                />
            </div>
        </div>
    );
};
