/**
Copyright 2021 Forestry.io Holdings, Inc.
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react'
import type { TinaCMS } from '@tinacms/toolkit'

import GetCMS from '../components/GetCMS'
import { PageWrapper, PageHeader, PageBodyNarrow } from '../components/Page'

const DashboardPage = () => {
  return (
    <GetCMS>
      {(cms: TinaCMS) => (
        <PageWrapper>
          <>
            <PageHeader isLocalMode={cms.api?.tina?.isLocalMode}>
              <h3 className="text-2xl text-gray-700">Welcome to Tina!</h3>
            </PageHeader>
            <PageBodyNarrow>
              This is your dashboard for editing or creating content. Select a
              collection on the left to begin.
            </PageBodyNarrow>
          </>
        </PageWrapper>
      )}
    </GetCMS>
  )
}

export default DashboardPage
