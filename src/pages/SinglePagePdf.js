import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import NavBarComponent from '../components/NavBarComponent';
import FooterComponent from '../components/FooterComponent';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function SinglePagePdf({ pdfFile }) {
    return (
        <>
            <NavBarComponent />
            <div className="text-center my-4">
                <Document file={pdfFile}>
                    <Page
                        pageNumber={1}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        width={Math.min(window.innerWidth - 40, 800)}
                    />
                </Document>
            </div>
            <FooterComponent />
        </>
    );
}

export default SinglePagePdf;