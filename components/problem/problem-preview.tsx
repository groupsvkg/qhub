"use client";

import MDEditor from "@uiw/react-md-editor";

export const ProblemPreview = ({problem}: {problem: any}) => {
    return (
        <MDEditor
            value={problem.description}
            preview='preview'
            height={400}
            hideToolbar
        />
    );
};

export default ProblemPreview;