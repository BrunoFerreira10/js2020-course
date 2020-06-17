<template>
  <div class="home">
    <PageTitle icon="fa fa-cogs" title="System administration" subtitle="Registration and others">      
    </PageTitle>
    <div class="admin-pages-tabs">
      <b-card no-body>
        <b-tabs card>
          <b-tab title="Articles" active>     
            <ArticleAdmin></ArticleAdmin>
          </b-tab>
          <b-tab title="Categories">
            <CategoryAdmin></CategoryAdmin>
          </b-tab>
          <b-tab title="Users">
            <UserAdmin></UserAdmin>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import ArticleAdmin from './ArticleAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'

export default {
  name: 'AdminPages',
  components: {
    PageTitle,
    ArticleAdmin,
    CategoryAdmin,
    UserAdmin
  }
}
</script>

<style>

</style>