import React from "react";
import '../../assets/css/main.css';

function FAQ() {

    return (
        <>
        <section id="faq" class="faq section-bg">
            <div class="container">

                <div class="section-title">
                    <h2 data-aos="fade-up">F.A.Q</h2>
                    <p data-aos="fade-up">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div class="faq-list">
                <ul>
                    <li data-aos="fade-up">
                        <i class="bx bx-help-circle icon-help"></i> Non consectetur a erat nam at lectus urna duis? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i>
                        {/* <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">Dolor sit amet consectetur adipiscing elit? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a> */}
                        <div id="faq-list-1" class="collapse show" data-bs-parent=".faq-list">
                            <p>
                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                            </p>
                        </div>
                    </li>

                    <li data-aos="fade-up" data-aos-delay="100">
                    <i class="bx bx-help-circle icon-help"></i> Feugiat scelerisque varius morbi enim nunc? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i>
                    {/* <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">Dolor sit amet consectetur adipiscing elit? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a> */}
                    <div id="faq-list-2" class="collapse" data-bs-parent=".faq-list">
                        <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </p>
                    </div>
                    </li>

                    <li data-aos="fade-up" data-aos-delay="200">
                    <i class="bx bx-help-circle icon-help"></i> Dolor sit amet consectetur adipiscing elit? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i>
                    {/* <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">Dolor sit amet consectetur adipiscing elit? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a> */}
                    <div id="faq-list-3" class="collapse" data-bs-parent=".faq-list">
                        <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                        </p>
                    </div>
                    </li>

                    <li data-aos="fade-up" data-aos-delay="300">
                    <i class="bx bx-help-circle icon-help"></i> Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i>
                    {/* <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">Dolor sit amet consectetur adipiscing elit? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a> */}
                    <div id="faq-list-4" class="collapse" data-bs-parent=".faq-list">
                        <p>
                        Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                        </p>
                    </div>
                    </li>

                    <li data-aos="fade-up" data-aos-delay="400">
                    <i class="bx bx-help-circle icon-help"></i> Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i>
                    {/* <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" class="collapsed">Dolor sit amet consectetur adipiscing elit? <i class="bx bx-chevron-down icon-show"></i><i class="bx bx-chevron-up icon-close"></i></a> */}
                    <div id="faq-list-5" class="collapse" data-bs-parent=".faq-list">
                        <p>
                        Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                        </p>
                    </div>
                    </li>

                </ul>
                </div>

            </div>
        </section>
        </>
    )
}

export default FAQ;


// import * as React from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';

// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// export default function FAQ() {
//   const [expanded, setExpanded] = React.useState<string | false>(false);

//   const handleChange =
//     (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
//       setExpanded(isExpanded ? panel : false);
//     };

//   return (
//     <Container
//       id="faq"
//       sx={{
//         pt: { xs: 4, sm: 12 },
//         pb: { xs: 8, sm: 16 },
//         position: 'relative',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: { xs: 3, sm: 6 },
//       }}
//     >
//       <Typography
//         component="h2"
//         variant="h4"
//         color="text.primary"
//         sx={{
//           width: { sm: '100%', md: '60%' },
//           textAlign: { sm: 'left', md: 'center' },
//         }}
//       >
//         Frequently asked questions
//       </Typography>
//       <Box sx={{ width: '100%' }}>
//         <Accordion
//           expanded={expanded === 'panel1'}
//           onChange={handleChange('panel1')}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1d-content"
//             id="panel1d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//               How do I contact customer support if I have a question or issue?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: '100%', md: '70%' } }}
//             >
//               You can reach our customer support team by emailing
//               <Link> support@email.com </Link>
//               or calling our toll-free number. We&apos;re here to assist you
//               promptly.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion
//           expanded={expanded === 'panel2'}
//           onChange={handleChange('panel2')}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2d-content"
//             id="panel2d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//               Can I return the product if it doesn&apos;t meet my expectations?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: '100%', md: '70%' } }}
//             >
//               Absolutely! We offer a hassle-free return policy. If you&apos;re not
//               completely satisfied, you can return the product within [number of
//               days] days for a full refund or exchange.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion
//           expanded={expanded === 'panel3'}
//           onChange={handleChange('panel3')}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel3d-content"
//             id="panel3d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//               What makes your product stand out from others in the market?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: '100%', md: '70%' } }}
//             >
//               Our product distinguishes itself through its adaptability, durability,
//               and innovative features. We prioritize user satisfaction and
//               continually strive to exceed expectations in every aspect.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion
//           expanded={expanded === 'panel4'}
//           onChange={handleChange('panel4')}
//         >
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel4d-content"
//             id="panel4d-header"
//           >
//             <Typography component="h3" variant="subtitle2">
//               Is there a warranty on the product, and what does it cover?
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography
//               variant="body2"
//               gutterBottom
//               sx={{ maxWidth: { sm: '100%', md: '70%' } }}
//             >
//               Yes, our product comes with a [length of warranty] warranty. It covers
//               defects in materials and workmanship. If you encounter any issues
//               covered by the warranty, please contact our customer support for
//               assistance.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </Box>
//     </Container>
//   );
// }
