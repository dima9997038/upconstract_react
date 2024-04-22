import React from 'react';
import { useState } from "react";
import {Document,Page,pdfjs} from "react-pdf";

function FinDocPdfPage(props) {
pdfjs.GlobalWorkerOptions.workerSrc= `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
            <div className="pdf-div">
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <Document file={props.pdf} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.apply(null, Array(numPages))
                        .map((x, i) => i + 1)
                        .map((page) => {
                            return (
                                <Page
                                    pageNumber={page}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                />
                            );
                        })}
                </Document>
            </div>
    );
}

export default FinDocPdfPage;