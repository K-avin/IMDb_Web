<template>
  <main class="d-flex align-items-center min-vh-100 py-3 py-md-0">
    <div class="container">
      <div class="login-card">
        <div class="row no-gutters">
          <div class="col-md-4"></div>
          <div class="col-md-6">
            <div class="card-body">
              <div class="brand-wrapper"></div>
              <p class="login-card-description">Login into your account</p>
              <form>
                <div class="form-group">
                  <label for="email" class="sr-only">Email</label>
                  <input type="email" name="email" id="email" class="form-control" placeholder="Email address" />
                </div>
                <div class="form-group mb-4">
                  <label for="password" class="sr-only">Password</label>
                  <input type="password" name="password" id="password" class="form-control" placeholder="**********" />
                </div>
                <button class="btn btn-block login-btn mb-4" type="submit">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  @import "../../assets/css/main.css";
</style>