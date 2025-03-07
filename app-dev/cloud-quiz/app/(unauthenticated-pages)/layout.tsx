/**
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Navbar from '@/app/components/navbar'
import '@/app/globals.css'

export const metadata = {
  title: 'About Party Game',
  description: 'An open-source party game to learn about Google Cloud.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <main className="mt-5 mx-auto max-w-2xl underline hover:decoration-[var(--google-cloud-blue)]">
        {children}
      </main>
    </>
  )
}
