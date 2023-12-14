import { useFeatureToggleQuery } from '../api/featureToggleApi'
import { FeatureToggle } from '../model/types'

type Keys<T> = keyof T

export function useFeatureToggle(feature: Keys<FeatureToggle>) {
  const { data } = useFeatureToggleQuery()

  if (!data) {
    return null
  }

  return data[feature]
}
