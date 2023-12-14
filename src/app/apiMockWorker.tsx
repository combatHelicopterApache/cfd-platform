import { setupWorker } from 'msw'
import { sessionHandlers } from 'entities/session/__mocks__/sessionHandlers'

export const apiMockWorker = setupWorker(...sessionHandlers)
