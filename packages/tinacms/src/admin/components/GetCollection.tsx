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

import React, { useEffect, useState } from 'react'
import type { TinaCMS } from '@tinacms/toolkit'
import { TinaAdminApi } from '../api'
import LoadingPage from '../components/LoadingPage'
import type { Collection } from '../types'

export const useGetCollection = (
  cms: TinaCMS,
  collectionName: string,
  includeDocuments: boolean = true
) => {
  const api = new TinaAdminApi(cms)
  const [collection, setCollection] = useState<Collection | undefined>(
    undefined
  )
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchCollection = async () => {
      const response = await api.fetchCollection(
        collectionName,
        includeDocuments
      )
      setCollection(response.getCollection)
      setLoading(false)
    }

    setLoading(true)
    fetchCollection()
  }, [cms, collectionName])

  return { collection, loading }
}

const GetCollection = ({
  cms,
  collectionName,
  includeDocuments = true,
  children,
}: {
  cms: TinaCMS
  collectionName: string
  includeDocuments?: boolean
  children: any
}) => {
  const { collection, loading } = useGetCollection(
    cms,
    collectionName,
    includeDocuments
  )
  if (!collection || loading === true) {
    return <LoadingPage />
  }
  return <>{children(collection, loading)}</>
}

export default GetCollection
