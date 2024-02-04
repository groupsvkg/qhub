"use client";

import 'katex/dist/katex.css';
import katex from 'katex';
import { getCodeString } from 'rehype-rewrite';
import MDEditor, { code } from "@uiw/react-md-editor";

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
  return <code className={String(className)}>{txt}</code>;
}

export const ProblemPreview = ({ problem }: { problem: any }) => {
  return (
    <MDEditor.Markdown
      source={problem.description}
      style={{ whiteSpace: "pre-wrap" }}
      components={{
        // @ts-ignore
        code: transformLatex
      }}
    />
  );
};

export default ProblemPreview;