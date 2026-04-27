import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import NavBarComponent from '../components/NavBarComponent';
import FooterComponent from '../components/FooterComponent';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function FullPdfScroll({ pdfFile }) {
    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => setNumPages(numPages);

    return (
        <>
            <NavBarComponent />
            <div className="container my-4" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
                <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages), (_, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                            className="mb-3 shadow-sm"
                            width={Math.min(window.innerWidth - 40, 800)} // адаптивная ширина
                        />
                    ))}
                </Document>
            </div>
            <FooterComponent />
        </>
    );
}

export default FullPdfScroll;