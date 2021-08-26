<template>
  <div class="wrapper">
    <!-- Navbar -->
    <TheNavbar />
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <TheSidebar />

    <!-- Content Wrapper. Contains page content -->
    <router-view></router-view>
    <!-- /.content-wrapper -->

    <!-- Control Sidebar -->
    <TheControlSidebar />
    <!-- /.control-sidebar -->

    <!-- Main Footer -->
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "@/views/Components/TheNavbar";
import TheSidebar from "@/views/Components/TheSidebar";
import TheControlSidebar from "@/views/Components/TheControlSidebar";
import TheFooter from "@/views/Components/TheFooter";

export default {
  components: {
    TheNavbar,
    TheSidebar,
    TheControlSidebar,
    TheFooter,
  },

  mounted() {},

  methods: {},
};
</script>