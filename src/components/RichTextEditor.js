import React, { useState } from 'react';
//import ReactHtmlParser from 'react-html-parser';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { Container } from "react-bootstrap";

function RichTextEditor(props) {
    const [value, setValue] = useState("")

    const handleOnChange = (e, editor) => {
        const data = editor.getData()
        setValue(data)
    }

    return (
        <Container>
            <CKEditor
                editor={ClassicEditor}
                onChange={handleOnChange}
            />
            {/*<div>
                {ReactHtmlParser(value)}
            </div>*/}
        </Container>
    )
}

export default RichTextEditor;