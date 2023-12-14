import { featureToggleApi } from '../api/featureToggleApi'
import { AppDispatch } from 'app/AppStore'

export async function featureToggleLoader(dispatch: AppDispatch) {
  const loader = dispatch(featureToggleApi.endpoints.featureToggle.initiate())

  try {
    return await loader.unwrap()
  } catch (error) {
    console.error(error)
  } finally {
    loader.unsubscribe()
  }
}
