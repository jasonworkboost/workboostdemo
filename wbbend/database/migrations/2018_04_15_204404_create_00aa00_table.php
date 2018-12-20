<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Create00aa00Table extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('00aa00', function (Blueprint $table) {
            $table->increments('id');
            $table->string('partnr')->nullable();
            $table->string('tasknr');
            $table->char('r_chall', 1);
            $table->char('r_enjoy', 1);
            $table->char('r_edu', 1);
            $table->text('r_exp');
            $table->char('r_recom', 1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('00aa00');
    }
}
