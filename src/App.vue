import { QPageContainer } from 'quasar';
<template>
  <QLayout view="hHh Lpr fFf">
    <QHeader class="bg-primary" elevated>
      <QToolbar>
        <QToolbarTitle>
          <RouterLink to="/">
            <QAvatar>
              <img src="@/assets/logo.svg" alt="ロゴ" />
            </QAvatar>
          </RouterLink>
          <RouterLink
            to="/"
            class="text-white"
            style="text-decoration: none; vertical-align: middle"
            >&nbsp; Top
          </RouterLink>
        </QToolbarTitle>
        <QSpace />
        <QBtn stretch flat label="Welcome" to="/welcome" />
        <QBtn stretch flat label="Animation" to="/animation" />
        <QBtn stretch flat label="Store" to="/store" />
      </QToolbar>
    </QHeader>

    <QPageContainer>
      <RouterView />
    </QPageContainer>

    <!-- <AppFooter /> -->
    <QFooter elevated>
      <QToolbar class="glossy text-center">
        <QToolbarTitle>
          <small>Copyright (c) 2023 SampleApp. All Rights Reserved.</small>
        </QToolbarTitle>
      </QToolbar>
    </QFooter>
  </QLayout>
</template>
