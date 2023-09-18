import Image from 'next/image'
import { Inter } from 'next/font/google'
import { UploadButton } from '@/components/UploadThing';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </main>
  
  )
}
