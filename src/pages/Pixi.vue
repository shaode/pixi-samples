<template>
    <div class="pixi">
    </div>
</template>

<script>
    import * as pixi from 'pixi.js'

    export default {
        name: 'pixi',
        data () {
            return {
                app: new pixi.Application()
            }
        },
        mounted () {
            this.$el.append(this.app.view)
        }
    }
</script>
