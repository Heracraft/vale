<script>
    import Footer from "$lib/footer.svelte";
    import Navbar from "$lib/navbar.svelte";

    import "../style/tailwind.css"
</script>

<main style="background-image: url('/bg.webp');" class="w-screen h-screen grid place-content-center relative"> 
    <Navbar/>
    <slot/>
    <Footer/>
</main>
