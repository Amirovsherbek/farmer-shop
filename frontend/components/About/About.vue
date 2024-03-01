<template>
    <div class="w-full py-20 px-20 bg-[#3F6050]">
        <div class="font-bold px-4 py-10 text-5xl text-[#FFFFFF]">
            How We Commit to a
            Culture of Sustainability
        </div>
        <div class="w-full flex justify-center px-5">
            <div class=" grid gap-8 grid-cols-3 ">
                <div class="">
                    <div class="about_box_icon">
                        <Tecnology />
                    </div>
                    <div class="about_title">Technology</div>
                    <div class="text-xl text-[#fff] font-normal my-2.5">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into
                        electronic typesetting.
                    </div>
                </div>
                <div class="">
                    <div class="about_box_icon">
                        <AricheviIcon />
                    </div>
                    <div class="about_title">Achivement</div>
                    <div class="text-xl text-[#fff] font-normal my-2.5">
                        It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it look like
                        readable English. Many desktop publishing packages.
                    </div>
                </div>
                <div class="">
                    <div class="about_box_icon">
                        <TruckIcon />
                    </div>
                    <div class="about_title">Technology</div>
                    <div class="text-xl text-[#fff] font-normal my-2.5">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
                        professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
                        consectetur, from a Lorem Ipsum passage.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AricheviIcon from '../../assets/icons/AricheviIcon.vue';
import Tecnology from '../../assets/icons/Tecnology.vue';
import TruckIcon from '../../assets/icons/TruckIcon.vue';

export default {
    name: "About",
    components: { Tecnology, AricheviIcon, TruckIcon }
}
</script>
<style scoped>
.about_title {
    font-weight: 700;
    font-size: 28px;
    line-height: 32.2px;
    color: #FFFFFF;
}
.about_box_icon{
    margin: 15px 0px;
}
</style>