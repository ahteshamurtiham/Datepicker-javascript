***********html**********

                            <div class="form-group col-md-4">
                                <label>Date</label>
                                <input type="text" name="date" id="date" class="form-control datepicker" placeholder="YYYY-MM-DD" readonly>
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                                  </span>

                            </div>


{{-- datepicker cdn link  --}}
<link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
<script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
{{-- datepicker cdn link end --}}


{{-- datepicker script  --}}
  <script>
    $('.datepicker').datepicker({
        uiLibrary: 'bootstrap4'
    });
  </script>

