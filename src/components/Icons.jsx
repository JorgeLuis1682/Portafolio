import React from 'react'

export function GithubIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

export function LinkedinIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export function InstagramIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function WhatsAppIcon({ className = 'w-4 h-4', ...props }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M17.472 14.382c-.301-.15-1.782-.879-2.058-.98-.276-.1-.476-.15-.677.15-.2.3-.777.98-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.787-1.676-2.088-.175-.3-.019-.462.132-.612.136-.135.301-.35.451-.525.15-.175.2-.3.301-.5.1-.2.05-.375-.025-.525s-.677-1.631-.928-2.234c-.244-.588-.493-.508-.677-.518-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.375-.276.3-1.053 1.03-1.053 2.511s1.078 2.91 1.228 3.11c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.23 1.378.197 1.897.12.578-.087 1.782-.728 2.033-1.431.251-.703.251-1.306.175-1.431-.075-.125-.276-.2-.577-.35m-5.465 7.424c-1.849 0-3.663-.497-5.253-1.439l-.377-.224-3.905 1.024 1.042-3.805-.246-.391a10.82 10.82 0 0 1-1.658-5.753c0-5.992 4.876-10.867 10.873-10.867 2.905 0 5.635 1.133 7.688 3.187a10.82 10.82 0 0 1 3.184 7.687c0 5.993-4.876 10.868-10.873 10.868m0-19.742c-4.894 0-8.873 3.978-8.873 8.873 0 1.554.405 3.072 1.173 4.408l-1.246 4.551 4.662-1.223a8.84 8.84 0 0 0 4.284 1.107c4.894 0 8.873-3.979 8.873-8.874 0-2.37-.923-4.598-2.6-6.274-1.676-1.677-3.904-2.6-6.273-2.6" />
    </svg>
  )
}
