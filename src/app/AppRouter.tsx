import { type ReactElement } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import { lazyWithRetry } from '../shared/routing/lazyWithRetry'

import { useAppSelector } from 'app/AppStore'

import { selectIsAuthorized } from 'entities/session'

// import { featureToggleLoader } from 'entities/featureToggle'

const LoginPage = lazyWithRetry(() => import('pages/LoginPage'))

const HomePage = lazyWithRetry(() => import('pages/HomePage'))

const ExchangePage = lazyWithRetry(() => import('pages/ExchangePage'))

const BuyPage = lazyWithRetry(() => import('pages/Buy'))

const SellPage = lazyWithRetry(() => import('pages/SellPage'))

const DepositPage = lazyWithRetry(() => import('pages/DepositPage'))

const MarketPage = lazyWithRetry(() => import('pages/MarketPage'))

const LearnPage = lazyWithRetry(() => import('pages/Learn'))

const ActivityPage = lazyWithRetry(() => import('pages/ActivityPage'))

const WaalletOverviewPage = lazyWithRetry(
  () => import('pages/WalletOverviewPage'),
)

const WaalletOverviewDetailsPage = lazyWithRetry(
  () => import('pages/WalletOverviewDetailsPage'),
)

const WalletMarginPage = lazyWithRetry(() => import('pages/WalletMarginPage'))

const FiatAndSpotPage = lazyWithRetry(() => import('pages/FiatAndSpotPage'))

const ProfileInfoPage = lazyWithRetry(() => import('pages/ProfileInfoPage'))

const ReferralsPage = lazyWithRetry(() => import('pages/Referrals'))

const ApiKeysPage = lazyWithRetry(() => import('pages/ApiKeysPage'))

const SessionAndLoginHistoryPage = lazyWithRetry(
  () => import('pages/SessionAndLoginHistoryPage'),
)

const NotificationPage = lazyWithRetry(() => import('pages/NotificationsPage'))

type GuestGuardProps = {
  children: ReactElement
}

function GuestGuard({ children }: GuestGuardProps) {
  // const isAuthorized = useAppSelector(selectIsAuthorized)
  const isAuthorized = true

  if (!isAuthorized) return <Navigate to='/sign-in' />

  return children
}

type AuthGuardProps = {
  children: ReactElement
}

function AuthGuard({ children }: AuthGuardProps) {
  const isAuthorized = useAppSelector(selectIsAuthorized)

  if (isAuthorized) return <Navigate to='/' />

  return children
}

export const appRouter = () =>
  createBrowserRouter([
    {
      element: (
        <AuthGuard>
          <LoginPage />
        </AuthGuard>
      ),
      errorElement: <div>error</div>,
      path: '/sign-in',
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/',
      element: (
        <GuestGuard>
          <HomePage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/exchange',
      element: (
        <GuestGuard>
          <ExchangePage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/buy',
      element: (
        <GuestGuard>
          <BuyPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/sell',
      element: (
        <GuestGuard>
          <SellPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/deposit',
      element: (
        <GuestGuard>
          <DepositPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/market',
      element: (
        <GuestGuard>
          <MarketPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/learn',
      element: (
        <GuestGuard>
          <LearnPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/activity',
      element: (
        <GuestGuard>
          <ActivityPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/wallet-overview',
      element: (
        <GuestGuard>
          <WaalletOverviewPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/wallet-overview/:id',
      element: (
        <GuestGuard>
          <WaalletOverviewDetailsPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/wallet-margin',
      element: (
        <GuestGuard>
          <WalletMarginPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/fiat-and-spot',
      element: (
        <GuestGuard>
          <FiatAndSpotPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/profile-info',
      element: (
        <GuestGuard>
          <ProfileInfoPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },

    {
      path: '/referrals',
      element: (
        <GuestGuard>
          <ReferralsPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },

    {
      path: '/api-keys',
      element: (
        <GuestGuard>
          <ApiKeysPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/sessions-and-login-history',
      element: (
        <GuestGuard>
          <SessionAndLoginHistoryPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
    {
      path: '/notifications',
      element: (
        <GuestGuard>
          <NotificationPage />
        </GuestGuard>
      ),
      errorElement: <div>error</div>,
      // loader: async () => {
      //   return await featureToggleLoader(appStore.dispatch)
      // },
    },
  ])
