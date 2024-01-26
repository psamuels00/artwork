#!/usr/bin/perl -w

my $show_git_mv = 1;  #  use 1 to show git mv commands, use 0 to execute mv command
my $dry_run = 1;

sub file_exists_exact_case {
    my ($path, $file) = @_;

    opendir(my $dh, $path) or die "Cannot open directory $path: $!";
    my @files = grep { $_ eq $file && -f "$path/$_" } readdir($dh);
    closedir($dh);
    return @files == 1;
}

while (<DATA>) {
    next if /^$/;
    die "Unexpected format on line $.: $_\n" if !/^(\S+) (\S+)$/;
    my $path = "src/images/$1";
    my $new_name = $2;

    if ($path =~ m|^(.*/)(.*)\.(.*)$|) {
        my $prefix = $1;
        my $old_name = $2;
        my $ext = $3;
        my $new_path = "$prefix$new_name.$ext";

        print("      '$new_name.$ext',\n") and next;

        if (file_exists_exact_case($prefix, "$new_name.$ext")) {
            print("ok exists: skipping $path\n") if !$show_git_mv;
        } elsif (! -f $path) {
            die "File not found on line $.: $path\n";
        } elsif ($show_git_mv) {
            print("git mv $path $new_path\n");
        } elsif ($dry_run) {
            print("      try: $prefix ($old_name -> $new_name) .$ext\n");
        } elsif (rename($path, $new_path)) {
            print("oki moved: $prefix ($old_name -> $new_name) .$ext\n");
        } else {
            die "Error moving file on line $.: $path [$!]\n";
        }

    } else {
        die "Invalid file format on line $.: $path\n";
    }
}

__DATA__
about/books-computer-other.png LanguageAndAlgorithmComputerBooks
about/books-computer-new.png NewTechComputerBooks
about/books-art.png ArtBooks
about/books-other.png OtherBooks
about/books-politics.png PoliticsAndPhilosophyBooks

meta/favicon/emma_face.png EmmasFace
meta/favicon/emma_face.xcf EmmasFace
meta/logo/PerrinLogo.png PerrinLogo
nightmare/trump-fraud.jpg TrumpIsAFraud

portfolio/BackyardHills/Backyard-09-finished-cropped.jpg FullPainting
portfolio/BackyardHills/Backyard-05-ref-photo.jpg ReferencePhoto
portfolio/BackyardHills/Backyard-01-orig-drawing.jpg FirstDrawing
portfolio/BackyardHills/Backyard-06-in-progress-1.jpg InProgress1
portfolio/BackyardHills/Backyard-07-in-progress-2.jpg InProgress2
portfolio/BackyardHills/Backyard-08-finished.jpg FinalPainting
portfolio/BackyardHills/Backyard-04-both-drawings.jpg FirstAndSecondDrawing

portfolio/BeachBoardwalk/BeachBoardwalkSketch-02-bench.jpg TheBench
portfolio/BeachBoardwalk/BeachBoardwalkSketch-03-barge.jpg TheBarge
portfolio/BeachBoardwalk/BeachBoardwalkSketch-04-lifeguard.jpg TheLifeguard
portfolio/BeachBoardwalk/BeachBoardwalkSketch-05-kite.jpg TheKite
portfolio/BeachBoardwalk/BeachBoardwalkSketch-06-surfers.jpg TheSurfers
portfolio/BeachBoardwalk/BeachBoardwalkSketch-01-full.jpg FullPainting

portfolio/Dolphin/02-TheDolphin.png FullPainting
portfolio/Dolphin/02-TheDolphin.jpg FullPainting
portfolio/Dolphin/01-TheArtistAndTheDolphin.jpg TheArtistAndTheDolphin
portfolio/Dolphin/03-TheDolphinCropped.jpg TheDolphinCropped

portfolio/TheOnion/01-RedOnion.png FullPainting
portfolio/TheOnion/01-RedOnion.jpg FullPainting
portfolio/TheOnion/03-TheArtistAndRedOnion.jpg TheArtistAndTheOnion
portfolio/TheOnion/04-RedOnionFullWall.jpg FullCanvas
portfolio/TheOnion/02-RedOnionCloseUp.jpg Closeup

portfolio/StarryNight/StarryStarryNight.jpg FullPainting

portfolio/TheDemo/02-PaintingFull-Reduced.jpg FullPaintingReduced
portfolio/TheDemo/01-OriginalPhoto.jpg ReferencePhoto
portfolio/TheDemo/14-Fence.jpg FenceCloseup
portfolio/TheDemo/05-Dummy.jpg WallDummyFace
portfolio/TheDemo/07-Dummy2.jpg HumanDummyFace
portfolio/TheDemo/04-Surfer.jpg SurferGirlFace
portfolio/TheDemo/12-Dummy2LeftHand.jpg HumanDummyLeftHand
portfolio/TheDemo/13-Dummy2RightHand.jpg HumanDummyRightHand
portfolio/TheDemo/15-DummyLeftHand.jpg WallDummyLeftHand
portfolio/TheDemo/16-DummyRightHand.jpg WallDummyRightHand
portfolio/TheDemo/17-RightHands.jpg BothDummiesRightHand
portfolio/TheDemo/03-DummyAndDummy.jpg DummyAndDummy
portfolio/TheDemo/09-Dummy2Face.jpg HumanDummyFaceCloseup
portfolio/TheDemo/10-Dummy2Eyes.jpg HumanDummyEyesCloseup
portfolio/TheDemo/11-Dummy2Mouth.jpg HumanDummyMouthCloseup
portfolio/TheDemo/18-Signature.jpg ArtistSignature
portfolio/TheDemo/02-PaintingFull.jpg FullPainting

portfolio/Emma/EmmaSittingRelaxedAttentive-12-final-framed.jpg FullPainting
portfolio/Emma/EmmaSittingRelaxedAttentive-02-photo.jpg ReferencePhoto
portfolio/Emma/EmmaSittingRelaxedAttentive-03-demo.jpg DemoOfEmmasLook
portfolio/Emma/EmmaSittingRelaxedAttentive-05-first-drawing.jpg FirstDrawing
portfolio/Emma/EmmaSittingRelaxedAttentive-13-final-zoom-head.jpg HeadZoom
portfolio/Emma/EmmaSittingRelaxedAttentive-14-final-zoom-face.jpg FaceZoom
portfolio/Emma/EmmaSittingRelaxedAttentive-07-ground.jpg Groundwork
portfolio/Emma/EmmaSittingRelaxedAttentive-08-floor.jpg TheFloor
portfolio/Emma/EmmaSittingRelaxedAttentive-09-counter-bg.jpg TheCounter
portfolio/Emma/EmmaSittingRelaxedAttentive-10-dark-body.jpg WithDarkTones
portfolio/Emma/EmmaSittingRelaxedAttentive-11-final.jpg FinalPainting
portfolio/Emma/EmmaSittingRelaxedAttentive-04-photo-and-drawing.jpg PhotoAndFirstDrawing
portfolio/Emma/EmmaSittingRelaxedAttentive-06-second-drawing.jpg FirstAndSecondDrawing

portfolio/DesertFlower/ColorWheelDesertFlower-01-final.jpg FullPainting

resume/resume.pdf Resume
















