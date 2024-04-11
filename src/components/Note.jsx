import React from 'react';
import { forwardRef } from 'react';

const Note = forwardRef(({content, initialPos,...props}, ref) => {
  return (
    <div
        ref = {ref}
        style={{
            position: "absolute",
            border: "1px solid black",
            left: `${initialPos?.x}px`,
            top: `${initialPos?.y}px`,
            backgroundColor: "lightyellow",
            width: '200px',
            padding: '10px',
            cursor: 'move',
            userSelect: "none",
        }}
        {...props}
        >
        📌{content}
    </div>
  )
})

export default Note;