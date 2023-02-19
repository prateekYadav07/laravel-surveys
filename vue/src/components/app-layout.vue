<template>
    <v-app id="inspire">
        <v-app-bar>
            <v-toolbar-title class="me-10">
                <v-avatar
                    class="me-5 ms-4"
                    color="grey-darken-1"
                    size="32"
                ></v-avatar>
                Surveys
            </v-toolbar-title>
            <template v-if="module != 'login'">
                <v-btn
                    v-for="link in links"
                    :key="link"
                    variant="text"
                >
                    {{ link }}
                </v-btn>

                <v-spacer></v-spacer>

                <v-responsive max-width="260">
                    <v-text-field
                        density="compact"
                        hide-details
                        variant="solo"
                    ></v-text-field>
                </v-responsive>
            </template>
        </v-app-bar>

        <v-main >
            <template v-slot:main>

            </template>
        </v-main>
<!--        <v-main class="bg-grey-lighten-2">-->
<!--            <v-container>-->
<!--                <v-row>-->
<!--                    <template v-for="n in 4" :key="n">-->
<!--                        <v-col-->
<!--                            class="mt-2"-->
<!--                            cols="12"-->
<!--                        >-->
<!--                            <strong>Category {{ n }}</strong>-->
<!--                        </v-col>-->

<!--                        <v-col-->
<!--                            v-for="j in 6"-->
<!--                            :key="`${n}${j}`"-->
<!--                            cols="6"-->
<!--                            md="2"-->
<!--                        >-->
<!--                            <v-sheet height="150"></v-sheet>-->
<!--                        </v-col>-->
<!--                    </template>-->
<!--                </v-row>-->
<!--            </v-container>-->
<!--        </v-main>-->
    </v-app>
</template>

<script>
    export default {
        props:{
            module: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                drawer: null,
                links: [
                    'Dashboard',
                    'Messages',
                    'Profile',
                    'Updates',
                ],
            }
        }
    }
</script>
