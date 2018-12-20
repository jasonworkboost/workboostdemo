<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLanguageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('language', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamps();
            $table->string('lan')->unique;
            $table->string('checkScreen');
            $table->string('checkScreenYes1');
            $table->string('checkScreenYes2');
            $table->string('checkScreenNo1');
            $table->string('checkScreenNo2');
            $table->string('answerLikert1');
            $table->string('answerLikert2');
            $table->string('answerLikert3');
            $table->string('answerLikert4');
            $table->string('answerLikert5');
            $table->string('question1');
            $table->string('question2');
            $table->string('question3');
            $table->string('question4');
            $table->string('question5');
            $table->string('placeholder4');
            $table->string('buttonNext');
            $table->string('succesMessage');
            $table->string('funfactMessage');
            $table->string('closeMessage');
            $table->string('footerMessage1');
            $table->string('footerMessage2');    
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('language');
    }
}
