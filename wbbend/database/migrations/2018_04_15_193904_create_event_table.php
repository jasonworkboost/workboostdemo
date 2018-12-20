<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event', function (Blueprint $table) {
            $table->increments('id');
            $table->timestamp('added_on');
            $table->string('ev_name');
            $table->longText('ev_description');
            $table->char('ev_code', 6)->unique();
            $table->string('ev_user');
            $table->string('ev_language');
            $table->string('ev_questionp');
            $table->boolean('ev_sequential');
            $table->string('ev_pcolor');
            $table->string('ev_scolor');
            $table->string('ev_tcolor');
            $table->string('ev_logob');
            $table->string('ev_logos');
            $table->boolean('ev_hidefooter');
            $table->boolean('ev_open');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event');
    }
}
