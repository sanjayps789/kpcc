import React from 'react'
import document from '../assets/documents/Congress_Manifesto_2024.pdf'
function ManifestoPdf() {
  return (
<div>
    <embed src={document} type="application/pdf" width="100%" height="830px" />
    </div>  )
}

export default ManifestoPdf