import { Container } from '@mui/material'

export default function FallbackErrorBoundary(error, resetErrorBoundary) {
  return (
    <>
      <Container maxWidth disableGutters sx={{height:"90vh"}}>
        <div className='p-5 flex flex-col justify-center items-center h-full'>
          <span classname="my-3">Something Went wrong :/</span>
          <span className="text-red-500">{error.message}</span>
          <a href="/#">
            <button className="p-3 bg-red-700 text-black rounded-xl">Return home?</button>
          </a>
        </div>
      </Container>
    </>
  )
} 