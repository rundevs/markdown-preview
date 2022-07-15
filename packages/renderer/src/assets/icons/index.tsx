import React from 'react'

export const Logo = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth={0}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Markdown Preview</title>
    <path
      d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.5 1a.5.5 0 0 0-.5.5v3.793L9.854 8.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L12 9.293V5.5a.5.5 0 0 0-.5-.5zM3.56 7.01h.056l1.428 3.239h.774l1.42-3.24h.056V11h1.073V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H2.5V11h1.06V7.01z"
      stroke="none"
    />
  </svg>
)

export const Close = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width='100%'
    height='100%'
  >
    <path fill="none" stroke="#000" d="m7 7 10 10M7 17 17 7" />
  </svg>
)

export const Dash = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <path d="M0 8a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1z" />
  </svg>
)

export const MaximizeLeft = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 18 24"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    {/* <path fill="none" d="M0 0h24v24H0z" /> */}
    <path d="m8 12 6-6v12z" />
  </svg>
)

export const MaximizeRight = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    viewBox="0 0 30 24"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    style={{ transform: 'scale(1.5)' }}
  >
    {/* <path fill="none" d="M0 0h24v24H0z" /> */}
    <path d="m16 12-6 6V6z" />
  </svg>
)
