import React, { useState, useEffect } from "react"
import { useDropzone } from "react-dropzone"

function BasicDropzone(props) {
  const [files, setFiles] = useState([])
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      )
    }
  })

  const thumbs = files.map(file => (
    <div className="dz-thumb" key={file.name}>
      <div className="dz-thumb-inner">
        <img src={file.preview} className="dz-img" alt={file.name} />
      </div>
    </div>
  ))

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview))
    },
    [files]
  )

  return (
    <section>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p className="mx-1">
          Drag 'n' drop file disini, atau klik untuk memilih file
        </p>
      </div>
      <aside className="thumb-container">{thumbs}</aside>
    </section>
  )
}

class DropzoneBasic extends React.Component {
  render() {
    return (
      <BasicDropzone />
    )
  }
}

export default DropzoneBasic
