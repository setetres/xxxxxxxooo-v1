<template>
    <section class="application__content">
        <div class="embed">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Cv9DGU4jOQ8" frameborder="0" allowfullscreen />
        </div>
        <div class="music">
            <div class="music__cover">
                <img src="/images/moshaxe.png" alt="MOSHAXÉ Single Cover">
                <small>
                    MOSHAXÉ (Single), by XXXXXXXOOO. Recorded in FL Studio 20 during the COVID-19 quarentine.
                </small>
            </div>
            <div class="music__info">
                <div class="music__track">
                    <div>
                        <small>1.</small>
                        <small>2:19</small>
                    </div>
                    <p>
                        MOSHAXÉ
                    </p>
                </div>
                <small>
                    <a href="https://bit.ly/MOSHAXEAPPLEMUSIC" class="link" target="_blank" rel="noopener">Listen on  Music</a><br>
                    <a href="https://bit.ly/MOSHAXEDEEZER" class="link" target="_blank" rel="noopener">Listen on Deezer</a><br>
                    <a href="https://bit.ly/MOSHAXEOUTNOW" class="link" target="_blank" rel="noopener">Listen on Spotify</a><br>
                    <a href="https://bit.ly/MOSHAXETIDAL" class="link" target="_blank" rel="noopener">Listen on Tidal</a><br>
                    <a href="https://bit.ly/MOSHAXEYOUTUBE" class="link" target="_blank" rel="noopener">Listen on YouTube</a>
                </small>
            </div>
        </div>
        <div class="embed">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/CKqnuZBjsZY" frameborder="0" allowfullscreen />
        </div>
        <div class="music">
            <div class="music__cover">
                <img src="/images/triceracough.png" alt="TRICERACOUGH Single Cover">
                <small>
                    TRICERACOUGH (Single), by XXXXXXXOOO. Recorded in FL Studio 20 during the COVID-19 quarentine.
                </small>
            </div>
            <div class="music__info">
                <div class="music__track">
                    <div>
                        <small>1.</small>
                        <small>3:34</small>
                    </div>
                    <p>
                        TRICERACOUGH
                    </p>
                </div>
                <small>
                    <a href="https://bit.ly/TRICERACOUGHAPPLEMUSIC" class="link" target="_blank" rel="noopener">Listen on  Music</a><br>
                    <a href="https://bit.ly/TRICERACOUGHDEEZER" class="link" target="_blank" rel="noopener">Listen on Deezer</a><br>
                    <a href="https://bit.ly/TRICERACOUGHOUTNOW" class="link" target="_blank" rel="noopener">Listen on Spotify</a><br>
                    <a href="https://bit.ly/TRICERACOUGHTIDAL" class="link" target="_blank" rel="noopener">Listen on Tidal</a><br>
                    <a href="https://bit.ly/TRICERACOUGHYOUTUBE" class="link" target="_blank" rel="noopener">Listen on YouTube</a>
                </small>
            </div>
        </div>
        <div class="embed">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLWjcKkvgds-9TuK2urpOPMtvwxTU23zmO" frameborder="0" allowfullscreen />
        </div>
        <div class="music">
            <div class="music__cover">
                <img src="/images/fein.png" alt="FEIN EP Cover">
                <small>
                    FEIN (EP), by XXXXXXXOOO. Recorded in FL Studio 20 during the COVID-19 quarentine.
                </small>
            </div>
            <div class="music__info">
                <div class="music__track">
                    <div>
                        <small>1.</small>
                        <small>2:38</small>
                    </div>
                    <p>
                        QUATRE-VINGT-DIX-NEUF
                    </p>
                </div>
                <div class="music__track">
                    <div>
                        <small>2.</small>
                        <small>2:19</small>
                    </div>
                    <p>
                        COWEED-19
                    </p>
                </div>
                <div class="music__track">
                    <div>
                        <small>3.</small>
                        <small>2:34</small>
                    </div>
                    <p>
                        XD
                    </p>
                </div>
                <div class="music__track">
                    <div>
                        <small>4.</small>
                        <small>2:45</small>
                    </div>
                    <p>
                        BANJO
                    </p>
                </div>
                <small>
                    <a href="https://bit.ly/FEINAPPLEMUSIC" class="link" target="_blank" rel="noopener">Listen on  Music</a><br>
                    <a href="https://bit.ly/FEINDEEZER" class="link" target="_blank" rel="noopener">Listen on Deezer</a><br>
                    <a href="https://bit.ly/FEINOUTNOW" class="link" target="_blank" rel="noopener">Listen on Spotify</a><br>
                    <a href="https://bit.ly/FEINTIDAL" class="link" target="_blank" rel="noopener">Listen on Tidal</a><br>
                    <a href="https://bit.ly/FEINYOUTUBE" class="link" target="_blank" rel="noopener">Listen on YouTube</a>
                </small>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        components: {
        },

        mounted() {
            this.$nextTick(() => {
            })
        },

        beforeRouteLeave(to, from, next) {
            this.$nextTick(() => {
                next()
            })
        }
    }
</script>
