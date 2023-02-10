<script>
    export let response
</script>

<article class="rounded-lg bg-primary-800 prose-2xl max-w-[45ch] bg-opacity-80 backdrop-blur-sm m-2 md:m-0 ">
    <p class="font-mono text-white overflow-y-scroll max-h-[80vh]  p-3 md:p-10 ">
        {response}
    </p>
</article>
<style>
    p::-webkit-scrollbar{
        background-color: #a01141;
        border-radius:0 8px 8px 0 ;
    }
    p::-webkit-scrollbar-thumb{
        background-color: #c01046;
        border-radius:0 8px 8px 0 ;

    }
</style>