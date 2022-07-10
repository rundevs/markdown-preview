import React from 'react'

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
