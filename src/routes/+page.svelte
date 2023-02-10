<script>
    import {onMount} from "svelte"
    import Paper from "$lib/paper.svelte"

    import {io} from "../js/socket.io.esm"

    let response=" "
    var socket

    let connected=false
    let prompted=false

    let request,nameInput=""

    $:{console.log(response,"changed");}

    onMount(()=>{
        var socket=io("172.104.36.90:2932")
       
        socket.on("connect",()=>{
            connected=true
            
        })
        request=(name)=>{
            console.log(name);
            socket.emit("prompt",{name});
            socket.on("partial",data=>{
                response=data
                prompted=true
            })
            socket.on("complete",data=>{
                response=data
            })
        }
    })
</script>

{#if !prompted}
<article class="rounded-lg bg-primary-800 prose-2xl bg-opacity-80 backdrop-blur-sm m-2 md:m-0 p-5 min-h-56 grid place-content-center">
    <div class="flex flex-col justify-center items-center">
        <h1 class="!mb-4 text-primary-400">Your partner's name</h1>
        <div class="flex justify-end">
            <input bind:value={nameInput} type="text" id="first_name" class="bg-primary-200 border-b-2 border-primary-400 text-primary-900 text-sm  focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-primary-700 dark:border-primary-600 dark:placeholder-primary-400 dark:text-white dark:focus:ring-primary-600 dark:focus:border-primary-600 outline-none w-48 " placeholder="name" required>
            <div class="bg-primary-700 px-4 py-2 rounded-lg ml-2 fill-white" on:click={()=>{
                request(nameInput)
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3 20V4l19 8Zm2-3 11.85-5L5 7v3.5l6 1.5-6 1.5Zm0 0V7v6.5Z"/></svg>
            </div>
        </div>
    </div>
    <p>{response}</p>
</article>
{:else}
    <Paper {response}/>
{/if}